/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, TouchableWithoutFeedbackBase } from 'react-native';
import { Dimensions } from "react-native";

const Doctor = ({ navigation }) => {
   var width = Dimensions.get('window').width; //full width
   var height = Dimensions.get('window').height; //full height
   return (
      <View>
         <ScrollView>
            <View style={{ padding: 10, width: width, backgroundColor: '#5B779F', height: 0.08 * height }}>
               <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 23, padding: 4, textAlign: 'center', marginLeft: 200 }}>
                     Déconnexion
                  </Text>
               </TouchableOpacity>

            </View>
            <View><Text style={{ marginLeft: 0.07 * width, fontSize: 25, fontWeight: 'bold', color: '#3F3D56', paddingTop: 14, marginTop: 15 }}>Bonjour, Dr. Ahmed </Text></View>




            <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: -22 }}>
               <TouchableOpacity onPress={() => navigation.navigate('ProfileMedecin2')}>
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
               <TouchableOpacity onPress={() => navigation.navigate('Listedespatients')}>
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
                     <Image source={require('../images/patient.png')} style={{ width: 0.15 * height, height: 0.12 * height }} />
                     <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Patients</Text>
                  </View>

               </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 16 }}>
               <TouchableOpacity>
                  <View style={{
                     borderRadius: 20,
                     paddingVertical: 14,
                     alignItems: 'center',

                     paddingHorizontal: 10,
                     marginTop: 20,
                     backgroundColor: '#FAE7E6',
                     width: 0.22 * height,
                     height: 0.22 * height,
                     shadowColor: '#000000',
                     elevation: 20,
                     shadowOpacity: 80,
                  }} >
                     <Image source={require('../images/details.png')} style={{ marginRight: 97, height: height * 0.12, width: width * 0.54 }} />
                     <Text style={{ marginTop: 9, color: '#3F3D56', fontWeight: 'bold' }}>Notifications</Text>
                  </View>

               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('ProfileMedecin2')}>
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
                     <Image source={require('../images/détails.png')} style={{ width: 0.12 * height, height: 0.12 * height, marginTop: 6 }} />
                     <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Admin</Text>
                  </View>

               </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 50 }}></View>


         </ScrollView >
      </View >
   );


};
export default Doctor;

