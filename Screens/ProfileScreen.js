import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImagesExample from "./music_image";
import Imageslzy from "./Musician";

const Profile = (props) => {
return (
	<View style={{ flex: 1, alignItems: "center" }}>
		<ImagesExample />
		<Text style={styles.musicImg}>Nature Glitch Mandalization</Text>
		<View style={styles.addWrapper}>
			<Text style={styles.proDuct}>Product{"\n"} Detail</Text>
			<Imageslzy/>
			<Text style={styles.proDuct}>Product{"\n"} Detail</Text>
        </View>
		<Text style={styles.proDuct}>Lzy Lad</Text>
		<Button	title="BUY NOW" color="#000000" onPress={() => props.navigation.navigate("Settings")}/>
		<Text style={styles.proDuct}>View More NFTs by Lzy Lad</Text>
		<Text style={styles.proDuct}>Explore Creators like Lzy Lad</Text>
	</View>
	);
};

Profile.navigationOptions = (navData) => {
return {
	headerTitle: navData.navigation.getParam("username"),
	};
};

const styles = StyleSheet.create({
	musicImg:{
		color: "#000000",
		marginTop: 20,
		fontSize: 18,
	},
	proDuct:{
		color: "#000000",
		fontSize: 15,
		marginHorizontal: 40,

	},
	addWrapper:{
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	}

})

export default Profile;
