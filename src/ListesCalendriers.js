/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, ScrollView, Dimensions
} from "react-native";

// import { Feather, Entypo } from "@expo/vector-icons";


const Listecalendriers = ({ navigation }) => {
  const [calendriers, setcalendriers] = useState([
    { name: "Calendrier1", Key: "1" },
    { name: "Calendrier2", Key: "2" },
    { name: "Calendrier3", Key: "3" },
    { name: "Calendrier4", Key: "4" },
    { name: "Calendrier5", Key: "5" },
    { name: "Calendrier6", Key: "6" },
    { name: "Calendrier7", Key: "7" },
    { name: "Calendrier8", Key: "8" },
  ]);
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;


  return (


    <View style={[styles.container, {
      // Try setting flexDirection to "row".
      flexDirection: "column"
    }]}>



      <View style={{ flex: 0.8, backgroundColor: "#5B779F", flexDirection: "row" }} >
        <TouchableOpacity onPress={() => navigation.navigate('Calendrier')}>
          <Image style={{ marginTop: height * 0.04, marginLeft: 10 }}
            source={require('../images/symb.png')} />
        </TouchableOpacity>
        <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginLeft: width * 0.3, marginTop: height * 0.025 }} >
          Calendriers
        </Text>
      </View>


      <View style={[{ flex: 7, marginTop: height * 0.03, marginLeft: width * 0.03, marginRight: width * 0.03, borderRadius: 20, borderWidth: 2, borderColor: '#FAE7E6' }, { flexDirection: "column" }]}>
        {/* <View style={[styles.bord,{flexDirection:"row"}, ]}>
<Text style={{  marginTop:height*0.05,marginLeft:width*0.04, fontFamily: 'poppins',color:"#E3807B" , fontWeight: 'bold', fontSize: 18 }}>Ajouter Un Nouveau Calendrier</Text>
<TouchableOpacity><Image style={{ marginTop:height*0.03,marginLeft:width*0.07, height:height*0.08 , width: width*0.15}}

source={require('../images/Frame5.png')} /></TouchableOpacity>

</View> */}
        <ScrollView style={{ marginLeft: width * 0.04, marginRight: width * 0.04 }}>
          {calendriers.map((item) => {
            return (
              <TouchableOpacity >
                <View key={item.Key} style={[styles.item, { marginTop: height * 0.02, }, { flexDirection: "row" }]}>

                  <Text style={styles.items}>{item.name}</Text>
                  <TouchableOpacity><Image style={{ marginLeft: width * 0.2, marginTop: height * 0.02 }}

                    source={require('../images/tap9.png')} /></TouchableOpacity>

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

    borderColor: "#E3807B",
    elevation: 10,
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,


  },
  items: {
    fontSize: 22,
    color: "#3F3D56",

    padding: 20,
    textAlign: "center",

  },
  bord: {
    borderColor: "#E3807B",
  }

});


export default Listecalendriers;
