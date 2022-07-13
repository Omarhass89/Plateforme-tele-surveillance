/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image, FlatList,
  TouchableOpacity, Button, ScrollView, Dimensions
} from "react-native";

// import { Feather, Entypo } from "@expo/vector-icons";


const Listedespatients = ({ navigation }) => {
  const [patients, setpatients] = useState([
    { name: "Mohamed Saleh", Key: "1" },
    { name: "Omar Abid", Key: "2" },
    { name: "Sonia Gritli", Key: "3" },
    { name: "Ibrahim Giudara", Key: "4" },
    { name: "Hela Kammoun", Key: "5" },
    { name: "Souad Daoud", Key: "6" },
    { name: "", Key: "7" },

  ]);
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;


  return (


    <View style={[styles.container, {
      // Try setting flexDirection to "row".
      flexDirection: "column"
    }]}>



      <View style={{ flex: 0.8, backgroundColor: "#5B779F", flexDirection: "row" }} >
        <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
          <Image style={{ marginTop: height * 0.04, marginLeft: 10 }}
            source={require('../images/symb.png')} />
        </TouchableOpacity>
        <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginLeft: width * 0.17, marginTop: height * 0.025 }} >
          Liste Des Patients
        </Text>
      </View>


      <View style={[{ flex: 7, backgroundColor: "#FFFFFF", marginTop: height * 0.03, marginLeft: width * 0.03, marginRight: width * 0.03, borderRadius: 20, borderColor: '#FAE7E6' }, { flexDirection: "column" }]}>

        <ScrollView style={{ marginLeft: width * 0.04, marginRight: width * 0.04 }}>
          {patients.map((item) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('ProfilePatient3')}>
                <View key={item.Key} style={[styles.item, { marginTop: height * 0.02, }]}>

                  <Text style={[styles.items, { marginLeft: height * 0.07 }]}>{item.name}</Text>

                </View>
              </TouchableOpacity>

            )
          })}
        </ScrollView>
      </View>

    </View>


  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  item: {

    borderColor: "#FFFFFF",
    elevation: 10,
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,


  },
  items: {
    fontSize: 22,
    color: "#3F3D56",

    padding: 20,


  },
  bord: {
    borderColor: "#E3807B",
  }

});


export default Listedespatients;
