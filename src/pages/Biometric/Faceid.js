import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { faceid, finger, fingerface, vector } from '../../assets';

const Faceid = (props) => (
    <View>
        <ScrollView style={{ backgroundColor: "#3531B3", height: '100%' }}>
            <View>
                <Image source={vector} style={styles.head} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={faceid} style={styles.head2} />
            </View>
            <View>
                <Text style={styles.text1}>Activate Fingerprint</Text>
                <View style={{ paddingLeft: normalize(50), paddingRight: normalize(50) }}>
                    <Text style={{ textAlign: 'center', fontFamily: "Nunito-Regular", color: "white" }}>
                        Turn on face ID authentication for faster login and transactions, or manage
                        later in
                    </Text>
                    <Text style={{ textAlign: 'center', fontFamily: "Nunito-Regular", color: "white", fontWeight: "bold" }}>
                        Profile {">"} Face ID
                    </Text>
                </View>
            </View>

            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: normalize(20), paddingBottom: normalize(30) }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("bio-fingerface")} style={{ backgroundColor: "#FFB70A", width: normalize(250), height: normalize(50), borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#3531B3", textAlign: "center", fontFamily: "Nunito-Bold", fontWeight: 'bold', lineHeight:21 }}>ACTIVATE FACE ID</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingTop: normalize(20) }}>
                        <Text style={{ color: "#FFB70A" }}>SET UP LATER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
);

export default Faceid;

const styles = StyleSheet.create({
    head: {
        width: "100%",
        height: normalize(370),
        marginTop: normalize(-50)
    },
    head2: {
        width: normalize(200),
        height: normalize(160),
        marginTop: normalize(-150)
    },
    text1: {
        fontFamily: "Nunito-Bold",
        color: 'white',
        textAlign: 'center',
        fontSize: normalize(36)
    },
    text2: {

    }
})