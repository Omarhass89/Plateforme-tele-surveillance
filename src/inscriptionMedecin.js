/* eslint-disable prettier/prettier */


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

const InscriptionMedecin = ({ navigation }) => (
    <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
    }]}>
        <View style={{ backgroundColor: '#5B779F', padding: 10 }} >
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image source={require('../images/home.png')} />

            </TouchableOpacity>
        </View>


        <View style={{ backgroundColor: "#FAE7E6", padding: 20, margin: 25, borderRadius: 20, borderColor: '#3F3D56' }} >
            <Text style={[styles.textSize]}>
                Inscrivez-vous

            </Text>
            <View style={{ margin: 20 }}>
                <TextInput placeholder="Entrer votre Nom" style={{ borderWidth: 2, borderColor: '#E3807B', margin: 10, marginBottom: 15, padding: 8, backgroundColor: '#FFFFFF', borderRadius: 20 }} />
                <TextInput placeholder="Entrer votre Prénom" style={{ borderWidth: 2, borderColor: '#E3807B', margin: 10, marginBottom: 15, padding: 8, backgroundColor: '#FFFFFF', borderRadius: 20 }} />
                <TextInput placeholder="Entrer votre Emaill" style={{ borderWidth: 2, borderColor: '#E3807B', margin: 10, marginBottom: 15, padding: 8, backgroundColor: '#FFFFFF', borderRadius: 20 }} />
                <TextInput placeholder="Entrer votre Mot de passe" style={{ borderWidth: 2, borderColor: '#E3807B', margin: 10, marginBottom: 15, padding: 8, backgroundColor: '#FFFFFF', borderRadius: 20 }} />
                <TextInput placeholder="Confirmer votre Mot de passe " style={{ borderWidth: 2, borderColor: '#E3807B', margin: 10, marginBottom: 15, padding: 8, backgroundColor: '#FFFFFF', borderRadius: 20 }} />

            </View>
            <View>
                <Button
                    onPress={() => navigation.navigate('Doctor')}

                    title="S'inscrire"
                    color="#5B779F"
                    borderRadius="40"
                    style={{ margin: "40", padding: 9, borderRadius: 30, width: "30%" }}
                />
            </View>

        </View>

    </View>


);
export default InscriptionMedecin;

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    textSize: {
        textAlign: 'center',
        color: '#E3807B',
        fontWeight: 'bold',
        fontSize: 25

    }
});


