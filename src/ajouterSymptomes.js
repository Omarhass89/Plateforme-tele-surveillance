/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Button, Image } from 'react-native';


export default function AjouterSymptomes({ ajouterSymp }) {

    const [text, setText] = useState('');
    const changeHandler = (value) => {
        setText(value);

    }
    return (
        <View>
            <TextInput
                placeholder='Quelle sont les symptômes à ajouter ? ...'
                onChangeText={changeHandler}
                style={styles.input}
            />

            <TouchableOpacity style={{ marginBottom: 22 }} onPress={() => ajouterSymp(text)}>
                <View style={[styles.button, { flexDirection: 'row' }]}>
                    <Image source={require('../images/icons8-add-48.png')} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 13, marginTop: 9 }}>Ajouter symptômes</Text>

                </View>

            </TouchableOpacity >
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBotton: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    button: {

        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#E3807B',
        borderWidth: 2,

    }

})