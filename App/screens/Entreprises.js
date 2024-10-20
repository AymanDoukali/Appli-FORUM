import React from 'react';
import {View, StyleSheet, StatusBar, Dimensions, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import colors from '../constants/colors';
import {Entypo} from '@expo/vector-icons';

import {data} from "../constants/data"
import {EntButton} from '../components/EntrepriseButton';

const screen=Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        backgroundColor: colors.entrepriseBackground,
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
    entrepriseButton:{
        flexDirection:'column',
        borderWidth:2,
        borderColor:colors.border,
        paddingHorizontal:2,
        borderRadius:20,
        backgroundColor: colors.entrepriseButton,
        alignItems: 'center',
    },
    imageButton:{
        height: screen.height*0.19,
        width: screen.width*0.30,
    },
    row:{
        flex:1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default function EntreprisesScreen ({navigation}) {
    return(
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <ScrollView>
                <EntButton 
                    number1={0}
                    number2={1}
                    number3={2}
                    nav={navigation}
                />

                <EntButton 
                    number1={3}
                    number2={4}
                    number3={5}
                    nav={navigation}
                />

                <EntButton 
                    number1={6}
                    number2={7}
                    number3={8}
                    nav={navigation}
                />

                <EntButton 
                    number1={9}
                    number2={10}
                    number3={11}
                    nav={navigation}
                />

                <EntButton 
                    number1={12}
                    number2={13}
                    number3={14}
                    nav={navigation}
                />

                <EntButton 
                    number1={15}
                    number2={16}
                    number3={17}
                    nav={navigation}
                />

                <View style={styles.row}>
                    <TouchableOpacity style={styles.entrepriseButton} onPress={() =>navigation.navigate("Fiche", 
                                                                                    {stand: 19})}>
                        <Image source={data[18].logo}
                        style={styles.imageButton}
                        resizeMode='contain'
                        />
                        <Text style={styles.buttonText}>{data[18].name}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.entrepriseButton} onPress={() =>navigation.navigate("Fiche", 
                                                                                    {stand: 20})}>
                        <Image source={data[19].logo}
                        style={styles.imageButton}
                        resizeMode='contain'
                        />
                        <Text style={styles.buttonText}>{data[19].name}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Carte")}>
                    <Entypo name="compass" size={20} color={colors.texte} />
                    <Text style={styles.textbox}>Carte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Recherche")}>
                    <Entypo name="magnifying-glass" size={20} color={colors.texte} />
                    <Text style={styles.textbox}>Recherche</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
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

