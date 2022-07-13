/* eslint-disable prettier/prettier */
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, Dimensions
} from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";

const Voircycle = ({ navigation }) => {
  var width = Dimensions.get('window').width;
  var height = Dimensions.get('window').height;
  return (



    <View style={[styles.container, {
      // Try setting flexDirection to "row".
      flexDirection: "column"
    }]}>
      <View style={{ flex: 0.8, backgroundColor: "#5B779F", flexDirection: "row" }} >
        <TouchableOpacity onPress={() => navigation.navigate('Calendrier')}>
          <Image style={{ marginTop: height * 0.03, marginLeft: width * 0.02, padding: 5 }}
            source={require('../images/symb.png')}

          />
        </TouchableOpacity>
        <Text style={{ color: "#FFFFFF", fontFamily: "Bold", fontSize: 25, textAlign: 'center', marginLeft: width * 0.25, marginTop: height * 0.017, padding: 5 }} >
          Cycle en cours
        </Text>
      </View>
      <View style={{ flex: 7, backgroundColor: "#FFFFFF", marginTop: height * 0.03, marginLeft: width * 0.05, marginRight: width * 0.05, borderRadius: 20, borderColor: '#FAE7E6' }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginLeft: width * 0.01 }} onPress={() => navigation.navigate('CalendrierParJour')} >
            <Image
              source={require('../images/jour1.png')}

            />

          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: width * 0.01 }}>
            <Image
              source={require('../images/jour2.png')}

            />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: width * 0.2 }}>
          <TouchableOpacity  >
            <Image
              source={require('../images/jour3.png')}

            />
          </TouchableOpacity>
        </View>

        <Text></Text>

        <TouchableOpacity activeOpacity={0.5} style={{ padding: 5 }} >
          <Image
            source={require('../images/Frame13.png')}

          />

        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={{ padding: 5 }} >
          <Image
            source={require('../images/Frame14.png')}

          />

        </TouchableOpacity>
      </View>


    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1

  },

});

export default Voircycle;
