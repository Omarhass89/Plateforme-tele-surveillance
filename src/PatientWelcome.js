/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, TouchableWithoutFeedbackBase } from 'react-native';
import { Dimensions } from "react-native";

const Patient = ({ navigation }) => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    return (
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <ScrollView>
                <View style={{ backgroundColor: '#5B779F' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('LoginPatient')}>
                        <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 23, padding: 15, textAlign: 'center', marginLeft: 200 }}>
                            Déconnexion
                        </Text>
                    </TouchableOpacity>
                </View>
                <View><Text style={{ marginLeft: 0.1 * width, fontSize: 22, fontWeight: 'bold', color: '#3F3D56', paddingTop: 14 }}>Bonjour, Siwar !</Text></View>



                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: -22 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('ProfilePatient2')}>
                        <View style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            alignItems: 'center',
                            marginLeft: 0.09 * width,
                            paddingHorizontal: 10,
                            marginTop: 20,
                            backgroundColor: '#FAE7E6',
                            width: 0.22 * height,
                            height: 0.22 * height,
                            shadowColor: '#000000',
                            elevation: 20,
                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/profile.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                            <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Profil</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Symptomes')}>
                        <View style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            alignItems: 'center',
                            marginLeft: 0.09 * width,
                            paddingHorizontal: 10,
                            marginTop: 20,
                            backgroundColor: '#FAE7E6',
                            width: 0.22 * height,
                            height: 0.22 * height,
                            shadowColor: '#000000',
                            elevation: 20,
                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/doctor.png')} style={{ width: 0.15 * height, height: 0.12 * height }} />
                            <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Symptomes</Text>
                        </View>

                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: -22, marginBottom: 200 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Calendrier')} >
                        <View style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            alignItems: 'center',
                            marginLeft: 0.09 * width,
                            paddingHorizontal: 10,
                            marginTop: 20,
                            backgroundColor: '#FAE7E6',
                            width: 0.22 * height,
                            height: 0.22 * height,
                            shadowColor: '#000000',
                            elevation: 20,

                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/toilette.png')} style={{ width: 0.2 * height, height: 0.15 * height, marginRight: 69 }} />
                            <Text style={{ marginTop: 10, color: '#3F3D56', fontWeight: 'bold' }}>Calendrier</Text>
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
                            width: 0.22 * height,
                            height: 0.22 * height,
                            shadowColor: '#000000',
                            elevation: 20,
                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/questionnaire.png')} style={{ width: 0.15 * height, height: 0.15 * height, marginRight: 50 }} />
                            <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Questionnaire</Text>
                        </View>

                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', marginTop: 50 }}></View>


            </ScrollView>
        </View>
    );


};
export default Patient;

