import React from 'react';
import {View, StyleSheet, Image, Dimensions, Text, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

import { data } from "../constants/data";

const screen=Dimensions.get("window");

const styles=StyleSheet.create({
    row:{
        flex:1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    buttonText:{
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
});

export const EntButton = ({number1,number2,number3,nav}) => {  
    return (
        <View style={styles.row}>

            <TouchableOpacity style={styles.entrepriseButton} onPress={() =>nav.navigate("Fiche", 
                                                                            {stand: number1+1})}>
                <Image source={data[number1].logo}
                style={styles.imageButton}
                resizeMode='contain'
                />
                <Text style={styles.buttonText}>{data[number1].name}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.entrepriseButton} onPress={() =>nav.navigate("Fiche", 
                                                                            {stand: number2+1})}>
                <Image source={data[number2].logo}
                style={styles.imageButton}
                resizeMode='contain'
                />
                <Text style={styles.buttonText}>{data[number2].name}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.entrepriseButton} onPress={() =>nav.navigate("Fiche", 
                                                                            {stand: number3+1})}>
                <Image source={data[number3].logo}
                style={styles.imageButton}
                resizeMode='contain'
                />
                <Text style={styles.buttonText}>{data[number3].name}</Text>
            </TouchableOpacity>
        </View>
    );
};