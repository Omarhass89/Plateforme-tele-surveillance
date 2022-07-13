/* eslint-disable prettier/prettier */

import React from "react";
import { StyleSheet, Text, View, Image, Span, TouchableOpacity } from "react-native";
import { TextInput, Dimensions } from "react-native";
import { Button } from "react-native";


const LoginPatient = ({ navigation }) => {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    return (


        <View style={[styles.container, {
            // Try setting LoginDirection to "row".
            flexDirection: "column"
        }]}>
            <View style={{ flex: 0.8, backgroundColor: "#5B779F" }} >
                <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', padding: 15 }} >

                </Text>
            </View>
            <View style={{ flex: 7, backgroundColor: "#FAE7E6", marginTop: height * 0.03, marginBottom: height * 0.03, marginLeft: width * 0.03, marginRight: width * 0.03, borderRadius: 20, borderColor: '#FAE7E6' }} >
                <View style={{ marginTop: height * 0.01, marginLeft: width * 0.03 }}>
                    <Text style={{ marginLeft: 12, fontFamily: 'poppins', color: "#E3807B", fontWeight: 'bold', fontSize: 24 }}>Bienvenue !</Text>

                    <Image source={require('../images/Frame4.png')} style={{ marginLeft: 60, marginTop: 10 }} ></Image>



                    <View style={{ marginTop: 20 }}>
                        <Text style={{ marginLeft: width * 0.02, fontFamily: 'poppins', fontWeight: 'bold', fontSize: 18 }}>Adresse E-mail</Text>
                        <TextInput placeholder="Entrer votre Email" style={{ borderWidth: 2, borderColor: '#FFFFFF', marginTop: height * 0.01, marginBottom: height * 0.02, padding: 8, backgroundColor: '#FFFFFF', borderRadius: 10, marginRight: width * 0.03, elevation: 15 }} />
                        <Text style={{ marginLeft: width * 0.02, fontFamily: 'poppins', fontWeight: 'bold', fontSize: 18 }}>Mot de passe</Text>
                        <TextInput placeholder="Entrer votre Mot de passe" style={{ borderWidth: 2, borderColor: '#FFFFFF', marginTop: height * 0.01, marginBottom: height * 0.02, padding: 8, backgroundColor: '#FFFFFF', borderRadius: 10, marginRight: width * 0.03, elevation: 15 }} />
                        <View style={{ marginLeft: 20 }} >
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'poppins', fontWeight: 'bold', fontSize: 14, color: '#E3807B' }} >Mot de passe oublié ?</Text>
                            </TouchableOpacity>
                        </View>

                        <Text></Text>
                        <TouchableOpacity>
                            <Image source={require('../images/Frame12.png')} style={{ marginLeft: width * 0.25, marginTop: -4 }} ></Image>

                        </TouchableOpacity>
                        <Text></Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: width * 0.15, fontFamily: 'poppins', fontWeight: 'bold', fontSize: 14, color: "#3F3D56" }}>
                                vous n'avez pas de compte ?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('InscriptionPatient')}
                            >
                                <Text style={{ marginLeft: width * 0.01, fontFamily: 'poppins', fontWeight: 'bold', fontSize: 14, color: '#E3807B' }}>
                                    S'inscrire
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>



            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1

    }
});

export default LoginPatient;
