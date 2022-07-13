/* eslint-disable prettier/prettier */
import React from "react";
import { View, StyleSheet } from 'react-native';
import Login from '../src/Login';
import ListeAdmin from '../src/ListeAdmins';
// import Listedespatients from "./src/ListeDesPatients" ;
// import ListeMedecins from "./src/ListeMedecins" ;
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

function DrawerNavigationContent() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="ListeAdmin" component={ListeAdmin} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigationContent 