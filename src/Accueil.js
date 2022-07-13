/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image, FlatList,
    TouchableOpacity, Button, ScrollView, Dimensions
} from "react-native";

const Accueil = ({ navigation }) => {

    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
        }]}>
            <View style={{ flex: 0.7, backgroundColor: "#5B779F", flexDirection: "row" }} >
                <TouchableOpacity>
                    <Image style={{ marginTop: height * 0.02, marginLeft: width * 0.01 }}
                        source={require('../images/Vector.png')} />
                </TouchableOpacity>

            </View>


            <View style={[{ flex: 7, backgroundColor: "#FFFFFF" }, { flexDirection: "column" }, { marginLeft: -10 }]}>

                <TouchableOpacity onPress={() => navigation.navigate('LoginPatient')}>
                    <Image style={{ marginTop: height * 0.06, marginLeft: width * 0.07 }}
                        source={require('../images/Frame15.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('LoginMedecin')}>
                    <Image style={{ marginTop: height * 0.06, marginLeft: width * 0.07 }}
                        source={require('../images/Frame16.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('LoginAdmin')}>
                    <Image style={{ marginTop: height * 0.06, marginLeft: width * 0.07 }}
                        source={require('../images/Frame17.png')} />
                </TouchableOpacity>

            </View>
        </View>

    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1

    }
});


export default Accueil;