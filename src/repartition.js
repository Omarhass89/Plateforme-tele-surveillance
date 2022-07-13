/* eslint-disable prettier/prettier */
import React from "react";
// eslint-disable-next-line prettier/prettier
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { TextInput } from "react-native";
// eslint-disable-next-line prettier/prettier
import { Button } from "react-native";

const Répartition = ({ navigation }) => {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    return (


        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, backgroundColor: "#5B779F", flexDirection: 'row' }} >
                <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
                    <Image style={{ marginTop: height * 0.035, marginLeft: 10 }}
                        source={require('../images/symb.png')} />
                </TouchableOpacity>
                <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginLeft: width * 0.21, marginTop: height * 0.02 }} >
                    Patient x Médecin
                </Text>
            </View>

            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>
                    Donnez à chaque patient le médecin  autorisé à le suivre:
                </Text>
            </View>
            <View style={{ flex: 8, backgroundColor: "#FFFFFF", margin: 15, borderRadius: 20, borderColor: '#3F3D56' }} >
                <View style={{ margin: 20 }}>
                    <Text style={{ marginLeft: 12, fontFamily: 'poppins', fontWeight: 'bold', fontSize: 18 }}>Nom</Text>
                    <TextInput placeholder="Entrer votre Nom" style={{ borderWidth: 2, borderColor: '#E3807B', margin: 10, marginBottom: 10, padding: 5, backgroundColor: '#FFFFFF', borderRadius: 20, shadowRadius: 5 }} />
                    <Text style={{ marginLeft: 12, fontFamily: 'poppins', fontWeight: 'bold', fontSize: 18 }}>Prénom</Text>
                    <TextInput placeholder="Entrer votre Prénom" style={{ borderWidth: 2, borderColor: '#E3807B', margin: 10, marginBottom: 50, padding: 8, backgroundColor: '#FFFFFF', borderRadius: 20, shadowRadius: 5 }} />


                    <Button
                        title="Enregistrer"
                        color="#5B779F"
                        borderRadius="40"
                        style={{ margin: 40, padding: 9, borderRadius: 30, width: 30 }}
                    />
                </View>



            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});

export default Répartition;