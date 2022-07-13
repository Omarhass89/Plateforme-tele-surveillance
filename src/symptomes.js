/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import AjouterSymptomes from './ajouterSymptomes';







const Symptomes = ({ navigation }) => {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const [Symp, setSymp] = useState([
        { text: 'Fièvre', id: 1 },
        { text: 'Douleur', id: 2 },
        { text: 'Miction excessive', id: 3 },
    ]);

    const deleteSymptome = (id) => {
        setSymp((prevSymp) => {
            return prevSymp.filter(Symp => Symp.id != id);
        });
    }

    const ajouterSymp = (text) => {

        setSymp((prevSymp) => {
            return [
                { text: text, id: Math.random.toString() },
                ...prevSymp
            ];
        });
    }





    return (
        <ScrollView>
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
            }]}>
                <View style={{ backgroundColor: '#5B779F', padding: 9, flexDirection: 'row' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('Patient')} style={{ marginTop: height * 0.01 }}>
                        <Image source={require('../images/symb.png')} style={{ margin: 10 }} />


                    </TouchableOpacity>
                    <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, padding: 10, marginLeft: width * 0.2 }}>
                        Symptômes
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 20, marginRight: 15 }}>
                        Vous pouvez signaler vos symptômes afin que votre médecin puisse les consulter.                </Text>
                </View>


                <View>
                    <View style={{ backgroundColor: "#FAE7E6", padding: 20, margin: 25, borderRadius: 20, borderColor: '#3F3D56', shadowRadius: 5 }} >
                        <Text style={{ fontSize: 18, marginBottom: 20 }}>
                            Bonjour doctor, j’ai les symptômes suivants durant les derniers jours.
                        </Text>

                        <FlatList
                            numColumns={1}
                            keyExtractor={(item) => item.id}
                            data={Symp}
                            renderItem={({ item }) => (
                                <View style={{ width: 220, height: 35, backgroundColor: '#E3807B', borderRadius: 18, marginBottom: 30, flexDirection: 'row' }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 19, marginTop: 4, marginLeft: 20 }}>
                                        {item.text}
                                    </Text>
                                    <TouchableOpacity onPress={() => deleteSymptome(item.id)}>
                                        <Image source={require('../images/close.png')} style={{ margin: 4 }} />
                                    </TouchableOpacity>
                                </View>

                            )}
                        />

                        <View>
                            <AjouterSymptomes ajouterSymp={ajouterSymp} />
                        </View>





                        <Button
                            title="Envoyer"
                            color="#5B779F"
                            borderRadius="40"
                            style={{ margin: "40", padding: 9, borderRadius: 30, width: "30%" }}
                        />



                    </View>


                </View>

            </View >
        </ScrollView >

    )


};
export default Symptomes;

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    textSize: {
        textAlign: 'center',
        color: '#E3807B',
        fontWeight: 'bold',
        fontSize: 25

    }

});


