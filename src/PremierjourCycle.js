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

const PremierjourCycle = () => {
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;


  return (


    <View style={[styles.container, {
      // Try setting flexDirection to "row".
      flexDirection: "column"
    }]}>



      <View style={{ flex: 0.8, backgroundColor: "#5B779F", flexDirection: "row" }} >

        <TouchableOpacity>
          <Image style={{ marginTop: height * 0.04, marginLeft: 10 }}
            source={require('../images/symb.png')} />
        </TouchableOpacity>
        <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginLeft: width * 0.17, marginTop: height * 0.025 }} >
          Calendrier N°: 1
        </Text>
      </View>
      <Text style={{ color: "#3F3D56", fontFamily: "Bold", fontSize: 30, marginLeft: width * 0.1, marginTop: height * 0.04 }}>1er jour </Text>


      <View style={[{ flex: 7, backgroundColor: "#FFFFFF", marginTop: height * 0.01, marginLeft: width * 0.04, marginRight: width * 0.04, borderRadius: 20, borderColor: '#FAE7E6' }, { flexDirection: "column" }]}>

        <ScrollView style={{ marginLeft: width * 0.02, marginRight: width * 0.04 }}>
          <TouchableOpacity>
            <View style={{ height: height * 0.07, backgroundColor: "#3F3D56", elevation: 10, marginTop: height * 0.04, marginLeft: width * 0.02 }}>
              <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginTop: height * 0.012 }}>Se coucher </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ height: height * 0.07, backgroundColor: "#E3807B", elevation: 10, marginTop: height * 0.04, marginLeft: width * 0.02 }}>
              <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginTop: height * 0.012 }}>Se réveiller </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ height: height * 0.07, backgroundColor: "#5B779F", elevation: 10, marginTop: height * 0.04, marginLeft: width * 0.02 }}>
              <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginTop: height * 0.012 }}>Toilettes </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ height: height * 0.07, backgroundColor: "#E3807B", elevation: 10, marginTop: height * 0.04, marginLeft: width * 0.02 }}>
              <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginTop: height * 0.012 }}>Protection </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ height: height * 0.07, backgroundColor: "#3F3D56", elevation: 10, marginTop: height * 0.04, marginLeft: width * 0.02 }}>
              <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginTop: height * 0.012 }}>Boissons </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ height: height * 0.07, backgroundColor: "#5B779F", elevation: 10, marginTop: height * 0.04, marginLeft: width * 0.02 }}>
              <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginTop: height * 0.012 }}>Besoins </Text>
            </View>
          </TouchableOpacity>

        </ScrollView>



      </View>

    </View>


  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1

  },


});


export default PremierjourCycle;
