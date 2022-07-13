/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, TouchableWithoutFeedbackBase, TextInput } from 'react-native';
import { Dimensions } from "react-native";
import FlatButton from './Button';

const Reveiller = ({ navigation }) => {
   var width = Dimensions.get('window').width; //full width
   var height = Dimensions.get('window').height; //full height
   return (
      <View>
         <ScrollView>
            <View style={{ padding: 10, width: width, backgroundColor: '#5B779F', height: 0.1 * height }}>
               <View style={{ flex: 0.8, backgroundColor: "#5B779F", flexDirection: "row" }} >

                  <TouchableOpacity onPress={() => navigation.navigate('CalendrierParJour')}>
                     <Image source={require('../images/symb.png')} style={{ marginTop: height * 0.04, marginLeft: width * 0.05 }} ></Image>

                  </TouchableOpacity>

               </View>

            </View>
            <View style={{ alignItems: 'center' }}>
               <Image source={require('../images/reveiller.png')} style={{
                  width: 0.2 * height, height: 0.2 * height, borderRadius: 100,
                  borderColor: '#fff', borderWidth: 8
               }}></Image>

               <Text style={{ fontSize: 15, color: '#3F3D56', marginBottom: 15 }}>Préciser l'heure de votre réveil et humeur</Text>
            </View>
            <View style={{
               alignSelf: 'center',
               justifyContent: 'center',
               backgroundColor: '#fff',
               width: 0.9 * width,
               height: 0.4 * height,
               padding: 20,
               paddingBottom: 22,
               borderRadius: 10,
               shadowOpacity: 80,

               elevation: 15,
               marginTop: 10,
            }}>
               <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                  <Text style={{ fontSize: 15, color: '#3F3D56', fontWeight: 'bold', marginLeft: 10 }}>Date & heure</Text>
                  <TextInput style={{ borderColor: '#3F3D56', borderRadius: 20, borderWidth: 3, width: 0.8 * width, height: height * 0.09 }}></TextInput>

               </View>
               <View style={{ flexDirection: 'column', }}>
                  <Text style={{ fontSize: 15, color: '#3F3D56', fontWeight: 'bold', marginLeft: 10 }}>Humeur</Text>
                  <TextInput style={{ borderColor: '#3F3D56', borderRadius: 20, borderWidth: 3, width: 0.8 * width, height: height * 0.09, marginRight: 10 }}></TextInput>
               </View>

            </View>


            <View style={{
               alignItems: 'center',
               flex: 1,
               justifyContent: 'center',

               width: 0.9 * width,
               marginTop: 50,
               marginLeft: 20


            }}>
               <FlatButton text='Sauvegarder'></FlatButton>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}></View>

         </ScrollView>
      </View>
   );


};
export default Reveiller;

