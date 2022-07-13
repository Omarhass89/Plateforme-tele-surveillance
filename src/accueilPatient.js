/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';



const AccueilPatient = () => {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    return (
        <ScrollView>
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
            }]}>
                <View style={{ backgroundColor: '#5B779F' }} >
                    <TouchableOpacity>
                        <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 23, padding: 15, textAlign: 'center', marginLeft: 200 }}>
                            Déconnexion
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, marginLeft: 15, marginTop: 20, color: '#3F3D56' }}>
                        Bonjour,
                    </Text>
                    <Text style={{ fontSize: 30, marginLeft: 9, marginTop: 20, fontWeight: 'bold', marginRight: 15, color: '#3F3D56' }}>
                        Sarra !
                    </Text>
                </View>


                <View style={{ flexDirection: 'row', marginBottom: 33, marginTop: 33 }}>

                    <TouchableOpacity>
                        <View style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            alignItems: 'center',
                            marginLeft: 0.09 * width,
                            paddingHorizontal: 10,
                            marginTop: 20,
                            backgroundColor: '#FAE7E6',
                            width: 0.18 * height,
                            height: 0.18 * height,
                            shadowColor: '#000000',
                            elevation: 20,
                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/profile.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                            <Text style={{ marginTop: 5, fontWeight: 'bold', color: '#3F3D56' }}>Profile</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            alignItems: 'center',
                            marginLeft: 0.09 * width,
                            paddingHorizontal: 10,
                            marginTop: 20,
                            backgroundColor: '#FAE7E6',
                            width: 0.18 * height,
                            height: 0.18 * height,
                            shadowColor: '#000000',
                            elevation: 20,
                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/docteur.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                            <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Symptôme </Text>
                        </View>

                    </TouchableOpacity>


                </View>

                <View style={{ flexDirection: 'row', }}>

                    <TouchableOpacity >
                        <View style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            alignItems: 'center',
                            marginLeft: 0.09 * width,
                            paddingHorizontal: 10,
                            marginTop: 20,
                            backgroundColor: '#FAE7E6',
                            width: 0.18 * height,
                            height: 0.18 * height,
                            shadowColor: '#000000',
                            elevation: 20,
                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/toilette.png')} style={{ width: 0.16 * height, height: 0.12 * height, marginRight: 50 }} />
                            <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Calendrier</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            alignItems: 'center',
                            marginLeft: 0.09 * width,
                            paddingHorizontal: 10,
                            marginTop: 20,
                            backgroundColor: '#FAE7E6',
                            width: 0.18 * height,
                            height: 0.18 * height,
                            shadowColor: '#000000',
                            elevation: 10,
                            shadowOpacity: 80
                        }} >
                            <Image source={require('../images/questionnaire.png')} style={{ width: 0.16 * height, height: 0.13 * height, marginRight: 34 }} />
                            <Text style={{ color: '#3F3D56', fontWeight: 'bold' }}>Questionnaire</Text>
                        </View>

                    </TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row', marginTop: 50 }}></View>


            </View >
        </ScrollView >
    )





};
export default AccueilPatient;

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

    },
    button: {

        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#E3807B',
        borderWidth: 2,

    }

});


