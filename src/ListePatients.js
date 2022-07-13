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


const ListePatients = ({ navigation }) => {
  const [Patients, setPatients] = useState([
    { name: "Amin Rebai", Key: "1" },
    { name: "Amal Ameur ", Key: "2" },
    { name: "Lotfi Krichen", Key: "3" },
    { name: "Safwen Siala", Key: "4" },
    { name: "Wala Rahali", Key: "5" },
    { name: "Hela Kchaou", Key: "6" },
    { name: "hedi Siala", Key: "7" },
    { name: "Amin Rebai", Key: "8" },
  ]);
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;


  return (


    <View style={[styles.container, {
      // Try setting flexDirection to "row".
      flexDirection: "column"
    }]}>



      <View style={{ flex: 0.8, backgroundColor: "#5B779F", flexDirection: "row" }} >
        <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
          <Image style={{ marginTop: height * 0.04, marginLeft: 10 }}
            source={require('../images/symb.png')} />
        </TouchableOpacity>
        <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginLeft: width * 0.3, marginTop: height * 0.025 }} >
          Patients
        </Text>
      </View>


      <View style={[{ flex: 7, backgroundColor: "#FFFFFF", marginLeft: 30, marginRight: 30, borderRadius: 20, borderColor: '#FAE7E6' }, { flexDirection: "column" }]}>
        <View style={[styles.bord, { flexDirection: "row" },]}>
          <Text style={{ marginLeft: width * 0.07, marginTop: height * 0.05, fontFamily: 'poppins', color: "#E3807B", fontWeight: 'bold', fontSize: 20 }}>Ajouter Un Patient</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AjouterPatient')} >
            <Image style={{ marginTop: height * 0.03, marginLeft: width * 0.16, height: height * 0.08, width: width * 0.15 }}
              source={require('../images/Frame5.png')} />
          </TouchableOpacity>

        </View>
        <ScrollView>
          {Patients.map((item) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('ProfilePatient')}>
                <View key={item.Key} style={[styles.item, { flexDirection: "row" }]}>

                  <Text style={styles.items}>{item.name}</Text>
                  <TouchableOpacity><Image style={{ marginLeft: width * 0.2, marginTop: height * 0.02 }}

                    source={require('../images/tap2.png')} /></TouchableOpacity>

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
    fontSize: 22,
    backgroundColor: "#FAE7E6",
    marginTop: 15,

    elevation: 15,
    borderRadius: 10
  },
  items: {
    fontSize: 22,
    marginLeft: 40,

    padding: 20,
    textAlign: "center",

  },
  bord: {
    borderColor: "#E3807B",
  }

});


export default ListePatients;
