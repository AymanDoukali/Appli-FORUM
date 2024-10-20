import { React, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";

import { search } from "../constants/data";

import colors from '../constants/colors';
import {Entypo} from '@expo/vector-icons';

const screen=Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    paddingTop: 30,
  },
  textInput: {
    flex: 1,

    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    borderRadius: 23,

    fontSize: 24,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,

    height: 46,

    marginRight: 0,
    marginLeft: 0,
  },
  searchView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 4,
    position: "relative",
  },
  searchButton: {
    width: 46,

    justifyContent: "center",
    alignContent: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 0,
    borderRadius: 23,
    paddingLeft: 9,
    backgroundColor: colors.rechercheBackground,

    height: 42,

    position: "absolute",
    top: 5,
    right: 6,
  },
  searchImage: {
    height: 30,
    width: 30,
    objectFit: "contain",
  },
  item: {
    backgroundColor: "white",
    marginVertical: 4,
  },
  name: {
    fontSize: 20,
  },
  domaine: {
    fontSize: 16,
    paddingRight: 8,
    fontStyle: "italic",
    alignSelf: "flex-end",
  },
  flatList: {
    backgroundColor: colors.rechercheBackground,
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
});

const Item = ({ title, domaine, description, logo, stand, nav}) => (
  <TouchableOpacity
    style={[styles.item, { flexDirection: "row", alignItems: "center" }]}
    onPress={() =>nav.navigate("Fiche", {stand})}
  >
    <Image
      style={{
        height: 80,
        width: 80,
        marginRight: 12,
        objectFit: "contain",
      }}
      source={logo}
    />
    <View style={{ flex: 1 }}>
      <Text style={styles.name}>{title}</Text>
      <Text style={[styles.domaine, { fontSize: 18 }]}>stand : {stand}</Text>
      <Text>{description}</Text>
      <Text style={styles.domaine}>{domaine}</Text>
    </View>
  </TouchableOpacity>
);

export default function RechercheScreen ({navigation}) {
  const [nameInput, setNameInput] = useState("");
  const [domaineInput, setDomaineInput] = useState("");

  const handleNameInputChange = (name) => setNameInput(name);
  const handleDomaineInputChange = (domaine) => setDomaineInput(domaine);

  return (
    <SafeAreaView style={{flex : 1}}>
        <View style={styles.container}>
          <View style={styles.searchView}>
            <TextInput
              style={styles.textInput}
              placeholder="Nom de l'entreprise"
              value={nameInput}
              onChangeText={handleNameInputChange}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Image
                style={styles.searchImage}
                source={require("../assets/image/search-regular-36.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.searchView}>
            <TextInput
              style={styles.textInput}
              placeholder="Domaine de l'entreprise"
              value={domaineInput}
              onChangeText={handleDomaineInputChange}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Image
                style={styles.searchImage}
                source={require("../assets/image/search-regular-36.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 8 }}>
            <FlatList
              style={styles.flatList}
              data={search(nameInput, domaineInput)}
              renderItem={({ item }) => (
                <Item
                  title={item.name}
                  domaine={item.domaine}
                  description={item.description}
                  logo={item.logo}
                  stand={item.stand}
                  carte={item.carte}
                  nav={navigation}
                />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Carte")}>
                    <Entypo name="compass" size={20} color={colors.texte} />
                    <Text style={styles.textbox}>Carte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
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
    </SafeAreaView>
  );
};

