import React from 'react';
import {View, StatusBar, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {Entypo} from '@expo/vector-icons';

import {data} from '../constants/data';

const screen=Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flex:1,
    },
    buttonContainer:{
        backgroundColor: colors.black,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    main:{
        width: screen.width,
        height: screen.height * 0.95,
    },
    head:{
        width: screen.width,
        height: screen.height * 0.10,
        backgroundColor: colors.headFiche,
        alignItems: "center",
        justifyContent:"center",
        borderBottomWidth: 1.5,
        borderColor: colors.border,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: "center",
    },
    mainText:{
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontSize: 15,
        textAlign: "justify",
    },
});


export default function FicheScreen ({route, navigation}) {
    const { stand } = route.params;
    return(
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>

            <View style={styles.main}>
                <View style={styles.head}>
                    <Text style={styles.title}>{data[stand-1].name}</Text>
                </View>

                <Text style={styles.mainText}>{data[stand-1].description}</Text>
            </View>



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