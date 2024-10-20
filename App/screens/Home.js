import React from 'react';
import {View, StyleSheet, StatusBar, Image, Dimensions, Text, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import {Entypo} from '@expo/vector-icons';


const screen=Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        backgroundColor: colors.homeBackground,
        flex:1,
        alignItems: 'center',
    },
    buttonContainer:{
        backgroundColor: colors.black,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ima:{
        width: screen.width,
        height: screen.height*0.92,
    },
    button:{
        backgroundColor:colors.black,
        justifyContent:'center',
        alignItems: 'center',
        height: screen.height*0.08,
        width: screen.width*0.20,
        flexDirection:'column',
        paddingBottom: 15
    },
    textbox:{
        color: colors.texte,
        fontSize: 10,
    },
});

export default function HomeScreen({ navigation }) {   
    return(
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <Image source={require('../assets/image/Logo.png')}
                    style={styles.ima}
                    resizeMode='contain'
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Carte")}>
                    <Entypo name="compass" size={20} color={colors.texte} />
                    <Text style={styles.textbox}>Carte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Recherche")}>
                    <Entypo name="magnifying-glass" size={20} color={colors.texte} />
                    <Text style={styles.textbox}>Recherche</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Entreprises")}>
                    <Entypo name="list" size={20} color={colors.texte} />
                    <Text style={styles.textbox}>Entreprises</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Planning")}>
                    <Entypo name="calendar" size={20} color={colors.texte} />
                    <Text style={styles.textbox}>Planning</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Contacts")}>
                    <Entypo name="mail" size={20} color={colors.texte} />
                    <Text style={styles.textbox}>Contacts</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
