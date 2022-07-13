/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions, Button } from 'react-native';
import FlatButton from '../src/Button';

const OnboardingItem = ({ item, navigation }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

            <View >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>


            </View>
            <FlatButton onPress={() => navigation.navigate('Login')} text='Rejoignez-nous' />

        </View>
    );

};
export default OnboardingItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        marginBottom: 20,

    },
    title: {
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
        fontFamily: 'Verdana',

    },
    description: {
        fontFamily: 'Verdana',
        fontWeight: '300',
        textAlign: 'center',
        color: '#493d8a',
        paddingHorizontal: 64,
        marginBottom: 30,

    },

});