/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image, FlatList,
  TouchableOpacity, Button, ScrollView, Dimensions
} from "react-native";
import axios from "axios";
import { useEffect } from "react";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IP } from './adresseIP';



export default function ListeHopital({ navigation, route }) {
  const donnee = route.params;
  console.log(route.params)
  //   const navigation = useNavigation () ;
  const [hopitals, setHopital] = useState([])
  useEffect(() => {
    async function getAllHopital() {
      try {
        const hopitals = await axios.get(`http://${IP}/api/hopital/afficher`)
        console.log(hopitals.data)
        setHopital(hopitals.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getAllHopital()
  }, [])
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;


  return (


    <View style={[styles.container, {
      // Try setting flexDirection to "row".
      flexDirection: "column"
    }]}>



      <View style={{ flex: 0.8, backgroundColor: "#5B779F", flexDirection: "row" }} >
        <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
          <Image style={{ marginTop: height * 0.04, marginLeft: width * 0.02 }}
            source={require('../images/symb.png')} />
        </TouchableOpacity>
        <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginLeft: width * 0.35, marginTop: height * 0.025 }} >
          Hopitals
        </Text>
      </View>


      <View style={[{ flex: 7, backgroundColor: "#FAE7E6", marginLeft: 20, marginRight: 20, marginTop: 15, borderRadius: 20, borderColor: '#FAE7E6' }, { flexDirection: "column" }]}>
        <View style={[styles.bord, { flexDirection: "row" },]}>
          <Text style={{ marginLeft: width * 0.07, marginTop: height * 0.05, fontFamily: 'poppins', color: "#E3807B", fontWeight: 'bold', fontSize: 20 }}>Ajouter Un Hopital</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AjouterHopital', donnee)}><Image style={{ marginTop: height * 0.03, marginLeft: width * 0.19, height: height * 0.08, width: width * 0.15 }}
            source={require('../images/Frame5.png')} /></TouchableOpacity>

        </View>
        <View style={styles.cont}>
          <TextInput style={styles.searchinput} placeholder="Search here ...." />

        </View>

        <FlatList
          data={hopitals}
          keyExtractor={item => item._id}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileHopital0', { hopital: item, id: donnee })}>
              <View key={item.Key} style={[styles.item, { flexDirection: "row" }]}>

                <Text style={styles.items}>{item.nom} {item.prenom}</Text>
                {/* <TouchableOpacity><Image style={{ marginLeft: width * 0.2, marginTop: height * 0.02 }}

                  source={require('../images/tap2.png')} /></TouchableOpacity> */}

              </View>
            </TouchableOpacity>}
        />
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
    backgroundColor: "#FFFFFF",
    marginTop: 15,
    borderColor: "#FFFFFF",
    marginLeft: 18,
    width: '90%',

    borderRadius: 8
  },
  items: {
    fontSize: 22,
    marginLeft: 40,

    padding: 20,
    textAlign: "center",

  },
  bord: {
    borderColor: "#FFFFFF",
  },
  cont: {
    marginTop: 8,
    marginLeft: 18,
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,

  },

  searchinput: {
    width: '90%',
    paddingLeft: 18,
    fontSize: 20

  }

});


