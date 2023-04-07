/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, TouchableWithoutFeedbackBase, Button } from 'react-native';
import { Dimensions } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';


const ProfileHopital0 = ({ navigation, route }) => {

   const {hopital,id} = route.params;
   
   


   var width = Dimensions.get('window').width; //full width
   var height = Dimensions.get('window').height; //full height
   return (
      <View>
         <ScrollView>
            <View style={{ padding: 10, width: width, backgroundColor: '#5B779F', height: 0.09 * height }}>
               <TouchableOpacity onPress={() => navigation.navigate('Admin',id)}>
                  <Image style={{ marginTop: height * 0.02, marginLeft: width * 0.02 }}
                     source={require('../images/symb.png')} />
               </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center' }}>
               <Image source={require('../images/ho.jpg')} style={{
                  width: 0.2 * height, height: 0.2 * height, borderRadius: 100,
                  marginTop: -0.05 * height, borderColor: '#fff', borderWidth: 8
               }}></Image>
               <Text style={{ fontSize: 30, color: '#3F3D56', marginBottom: 15 }}>{hopital.nom} {hopital.prenom}</Text>
            </View>
            <View style={{
               alignSelf: 'center',
               flexDirection: 'row',
               justifyContent: 'center',
               backgroundColor: '#fff',
               width: 0.9 * width,

               padding: 20,
               paddingBottom: 22,
               borderRadius: 10,
               shadowOpacity: 80,
               elevation: 15,
               marginTop: 10,
            }}>
               <Image source={require('../images/address.png')}
                  style={{ width: 20, height: 20 }}></Image>
               <Text style={{ fontSize: 15, color: '#3F3D56', fontWeight: 'bold', marginLeft: 10 }}>{hopital.adresse}</Text>
            </View>
            <View style={{
               alignSelf: 'center',
               flexDirection: 'row',
               justifyContent: 'center',
               backgroundColor: '#fff',
               width: 0.9 * width,
               padding: 20,
               paddingBottom: 22,
               borderRadius: 10,
               shadowOpacity: 80,
               elevation: 15,
               marginTop: 10,
            }}>
               <Image source={require('../images/phone.png')}
                  style={{ width: 20, height: 20 }}></Image>
               <Text style={{ fontSize: 15, color: '#3F3D56', fontWeight: 'bold', marginLeft: 10 }}>{hopital.telephone}</Text>
            </View>
          
            <View style={{
               alignSelf: 'center',
               flexDirection: 'row',
               justifyContent: 'center',
               backgroundColor: '#fff',
               width: 0.9 * width,
               padding: 20,
               paddingBottom: 22,
               borderRadius: 10,
               shadowOpacity: 80,
               elevation: 15,
               marginTop: 10,
               marginBottom:10
            }}>
               <Image source={require('../images/mail.png')}
                  style={{ width: 20, height: 20 }}></Image>
               <Text style={{ fontSize: 15, color: '#3F3D56', fontWeight: 'bold', marginLeft: 10 }}>{hopital.email}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
               <TouchableOpacity onPress={()=>navigation.navigate('ListeMedecins',{hopital:hopital})}>
                  <View style={{
                     borderRadius: 20,
                     paddingVertical: 14,
                     alignItems: 'center',
                     marginLeft: 0.32 * width,
                     paddingHorizontal: 10,
                     marginTop: 20,
                     backgroundColor: '#5B779F',
                     width: 0.2 * height,
                     height: 0.18 * height,
                     shadowColor: '#000000',
                     elevation: 20,
                     shadowOpacity: 80,
                  }} >
                     <Image source={require('../images/doctor.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                     <Text style={{ marginTop: 5, color: '#fff', fontWeight: 'bold' }}> Médecins</Text>
                  </View>

               </TouchableOpacity>
              

            </View>
           





         </ScrollView>
      </View>
   );


};
export default ProfileHopital0;

