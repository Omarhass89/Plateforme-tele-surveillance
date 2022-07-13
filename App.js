/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import AjouterMédecin from './src/ajouterMédecin';
import InscriptionAdmin from './src/inscriptionAdmin';
import InscriptionMedecin from './src/inscriptionMedecin';
import InscriptionPatient from './src/inscriptionPatient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AjouterAdmin from './src/ajouterAdmin';
import Calendrier from './src/Calendrier'
import Symptomes from './src/symptomes';
import LoginAdmin from './src/LoginAdmin';
import LoginMedecin from './src/LoginMedecin';
import LoginPatient from './src/LoginPatient';
import ListeAdmin from './src/ListeAdmins'
import Listedespatients from './src/ListeDesPatients'
import ListeMedecins from './src/ListeMedecins';
import ListePatients from './src/ListePatients'
import Listecalendriers from './src/ListesCalendriers'
import VoirCalendrier from './src/PremierjourCycle'
import Questionnaire from './src/Questionnaire'
import Voircycle from './src/Voircycle'
import Admin from './src/AdminWelcome'
import Besoin from './src/besoin'
import Boisson from './src/boisson'
import Coucher from './src/coucher'
import Doctor from './src/DoctorWelcome'
import Onboarding from './src/Onboarding'
import ProfileAdmin from './src/ProfileAdmin'
import ProfileMedecin from './src/ProfileMedecin'
import ProfilePatient from './src/ProfilePatient'
import Protection from './src/protection'
import Reveiller from './src/reveiller'
import Toilette from './src/toilette'
import FlatButton from './src/Button'
import ajouterMédecin from './src/ajouterMédecin'
import AjouterPatient from './src/ajouterPatient'
import DetailPatient from './src/detailPatient';
import Répartition from './src/repartition';
import Patient from './src/PatientWelcome';
import ProfilePatient2 from './src/ProfilePatient2'
import ProfilePatient3 from './src/ProfilePatient3'
import Accueil from './src/Accueil';
import PremierjourCycle from './src/PremierjourCycle';
import ProfileMedecin2 from './src/ProfileMedecin2';
import CalendrierParJour from './src/CalendrierparJour';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Accueil' component={Accueil}
          options={{
            headerShown: false
          }} />


        <Stack.Screen name='LoginAdmin' component={LoginAdmin}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='LoginMedecin' component={LoginMedecin}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='LoginPatient' component={LoginPatient}
          options={{
            headerShown: false
          }} />


        <Stack.Screen name='InscriptionAdmin' component={InscriptionAdmin}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='InscriptionMedecin' component={InscriptionMedecin}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='InscriptionPatient' component={InscriptionPatient}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Admin' component={Admin}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Patient' component={Patient}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Doctor' component={Doctor}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Répartition' component={Répartition}
          options={{
            headerShown: false
          }} />

        <Stack.Screen name='ListeMedecins' component={ListeMedecins}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Listedespatients' component={Listedespatients}
          options={{
            headerShown: false
          }} />

        <Stack.Screen name='ProfileMedecin' component={ProfileMedecin}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='ProfileMedecin2' component={ProfileMedecin2}
          options={{
            headerShown: false
          }} />

        <Stack.Screen name='Symptomes' component={Symptomes}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Calendrier' component={Calendrier}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='CalendrierParJour' component={CalendrierParJour}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='ListePatients' component={ListePatients}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='AjouterMédecin' component={AjouterMédecin}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='AjouterPatient' component={AjouterPatient}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='ProfilePatient' component={ProfilePatient}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='ProfilePatient2' component={ProfilePatient2}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='ProfilePatient3' component={ProfilePatient3}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Voircycle' component={Voircycle}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Listecalendriers' component={Listecalendriers}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='PremierjourCycle' component={PremierjourCycle}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Coucher' component={Coucher}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Reveiller' component={Reveiller}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Toilette' component={Toilette}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Protection' component={Protection}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Boisson' component={Boisson}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='Besoin' component={Besoin}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name='DetailPatient' component={DetailPatient}
          options={{
            headerShown: false
          }} />





      </Stack.Navigator>
    </NavigationContainer>
  )




};



