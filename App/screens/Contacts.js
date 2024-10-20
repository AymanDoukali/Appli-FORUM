import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Linking,
	Dimensions,
	Image,
} from "react-native";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		marginBottom: 10,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
	},
	websiteLink: {
		fontSize: 16,
		color: "#007bff",
		textDecorationLine: "underline",
	},
	input: {
		width: "80%",
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		paddingHorizontal: 10,
		borderRadius: 5,
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

export default function ContactsScreen({ navigation }) {
	const socialMedias = [
		{
			name: "Instagram",
			image: require("../assets/image/insta.png"),
			link: "https://www.instagram.com/",
		},
		{
			name: "Facebook",
			image: require("../assets/image/facebook.png"),
			link: "https://www.facebook.com/",
		},
		{
			name: "LinkedIn",
			image: require("../assets/image/linkedin.png"),
			link: "https://www.linkedin.com/",
		},
		{
			name: "Notre site",
			image: require("../assets/image/Logo.png"),
			link: "https://www.google.com/",
		},
	];

	const SocialMediaComponent = ({ socialMedia }) => {
		return (
			<TouchableOpacity
				onPress={() => Linking.openURL(socialMedia.link)}
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
                    marginVertical: 8,
                    height: 50
				}}
			>
				<Text
					style={{
						fontSize: 16,
						fontWeight: "bold",
					}}
				>
					{socialMedia.name}
				</Text>
				<Image source={socialMedia.image} style={{ width: 40, height: 40}} />
			</TouchableOpacity>
		);
	};

	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<Image
				source={require("../assets/image/Logo.png")}
				style={{
					width: screen.width * 0.9,
					height: undefined,
					aspectRatio: 0.95,
					resizeMode: "contain",
					alignSelf: "center",
                    marginTop: 20,
				}}
			/>

			<Text style={{ marginBottom: 10, marginLeft: 10, fontSize: 24, fontWeight: "bold" }}>
				Nous contacter:
			</Text>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "column",
						marginLeft: 15,
					}}
				>
					{socialMedias.map((socialMedia, index) => (
						<SocialMediaComponent key={index} socialMedia={socialMedia} />
					))}
				</View>
				<View style={{ flex: 2, marginLeft: 15 }}>
					<View
						style={{
							flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 8,
						}}
					>
						<Image
							source={require("../assets/image/form.png")}
							style={{
								height: 50,
								width: undefined,
								aspectRatio: 563 / 814,
								resizeMode: "contain",
							}}
						/>
						<Text style={{ marginLeft: 10, flex: 1, height: 50 }}>
							N'hésitez pas à nous laisser votre avis via ce form
						</Text>
					</View>

					<TouchableOpacity
						onPress={() => Linking.openURL("https://www.google.com/")}
						style={{ marginBottom: 10 }}
					>
						<Text style={{ color: "#0000ff", fontSize: 16 }}>
							https://www.google.com/
						</Text>
					</TouchableOpacity>
					<Text style={{fontWeight: "bold", fontSize: 14}}>Merci et à l'année prochaine</Text>
				</View>
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

                <TouchableOpacity style={styles.buttonBottom} onPress={() =>navigation.navigate("Planning")}>
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



