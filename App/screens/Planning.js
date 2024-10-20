import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import {Entypo} from '@expo/vector-icons';

const screen=Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
    },
    buttonContainerBottom: {
		backgroundColor: colors.black,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	buttonBottom: {
		backgroundColor: colors.black,
		justifyContent: "center",
		alignItems: "center",
		height: screen.height * 0.08,
		width: screen.width * 0.20,
		flexDirection: "column",
	},
	textboxBottom: {
		color: colors.texte,
		fontSize: 10,
	},
});

export default function PlanningScreen({ navigation }) {   
    return(
        <View style={styles.container}>
            <View style={{
                            width: screen.width,
                            height: screen.height*0.92,
                            alignSelf: "flex-start"
                        }}>
                <Text style={{fontSize: 24, fontWeight: "bold", alignSelf: 'center', margin: 20}}>Planning</Text>
                <Image source={require('../assets/image/edt.jpg')}
                        style={{
                            width: screen.width,
                        }}
                        resizeMode='contain'
            />
            </View>
            <View style={styles.buttonContainerBottom}>
                <TouchableOpacity style={styles.buttonBottom} onPress={() =>navigation.navigate("Carte")}>
                    <Entypo name="compass" size={20} color={colors.texte} />
                    <Text style={styles.textboxBottom}>Carte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBottom} onPress={() =>navigation.navigate("Recherche")}>
                    <Entypo name="magnifying-glass" size={20} color={colors.texte} />
                    <Text style={styles.textboxBottom}>Recherche</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBottom} onPress={() =>navigation.navigate("Entreprises")}>
                    <Entypo name="list" size={20} color={colors.texte} />
                    <Text style={styles.textboxBottom}>Entreprises</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBottom}>
                    <Entypo name="calendar" size={20} color={colors.texte} />
                    <Text style={styles.textboxBottom}>Planning</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBottom} onPress={() =>navigation.navigate("Contacts")}>
                    <Entypo name="mail" size={20} color={colors.texte} />
                    <Text style={styles.textboxBottom}>Contacts</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
