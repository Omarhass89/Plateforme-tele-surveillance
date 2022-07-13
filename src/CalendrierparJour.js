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

const CalendrierParJour = ({ navigation }) => {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    return (



        <View style={[styles.container, {
            // Try setting flexDirection to "row".
            flexDirection: "column"
        }]}>
            <View style={{ flex: 0.8, backgroundColor: "#5B779F", flexDirection: "row" }} >

                <TouchableOpacity onPress={() => navigation.navigate('Voircycle')}>
                    <Image source={require('../images/symb.png')} style={{ marginTop: height * 0.04, marginLeft: width * 0.05 }} ></Image>

                </TouchableOpacity>
                <Text style={{ color: "#FFFFFF", fontFamily: "Bold", marginLeft: width * 0.30, fontSize: 25, marginTop: height * 0.025 }} >
                    1er Jour
                </Text>
            </View>
            <View style={{ flex: 7, marginTop: height * 0.03 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft: width * 0.08 }} onPress={() => navigation.navigate('Coucher')} >
                        <Image
                            source={require('../images/Frame18.png')}

                        />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: width * 0.01 }} onPress={() => navigation.navigate('Reveiller')}>
                        <Image
                            source={require('../images/Frame19.png')}

                        />
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft: width * 0.01 }} onPress={() => navigation.navigate('Toilette')} >
                        <Image
                            source={require('../images/Frame20.png')}

                        />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: width * 0.01 }} onPress={() => navigation.navigate('Protection')}>
                        <Image
                            source={require('../images/Frame21.png')}

                        />
                    </TouchableOpacity>
                </View>
                <Text></Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft: width * 0.08 }} onPress={() => navigation.navigate('Boisson')} >
                        <Image
                            source={require('../images/Frame22.png')}

                        />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: width * 0.01 }} onPress={() => navigation.navigate('Besoin')}>
                        <Image
                            source={require('../images/Frame23.png')}

                        />
                    </TouchableOpacity>
                </View>



            </View>


        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1

    },

});

export default CalendrierParJour;
