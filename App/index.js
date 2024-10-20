import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import EntreprisesScreen from './screens/Entreprises';
import FicheScreen from './screens/Fiche';
import RechercheScreen from './screens/Recherche';
import ContactsScreen from './screens/Contacts';
import CarteScreen from './screens/Carte';
import PlanningScreen from './screens/Planning';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName="Acceuil">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Entreprises" component={EntreprisesScreen} />
        <Stack.Screen name="Fiche" component={FicheScreen} />
        <Stack.Screen name="Recherche" component={RechercheScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="Carte" component={CarteScreen} />
        <Stack.Screen name="Planning" component={PlanningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}