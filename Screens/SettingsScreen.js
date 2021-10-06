import React from "react";
import { ScrollView, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImagExample from "./img";
import Imaglzy from "./usrimg";
import ImagExe from "./Hot_trending";

const Settings = (props) => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		<ScrollView>
			<ScrollView horizontal={true} style={{marginBottom: 10}}>
				<ImagExample/>
				<ImagExample/>
				<ImagExample/>
			</ScrollView>
			<Button	title="Go to Home"	color="#006600" onPress={() => props.navigation.navigate("Home")}/>
			<ScrollView horizontal={true}>
				<Imaglzy/>
				<Imaglzy/>
			</ScrollView>
			<Button	title="Go to Home"	color="#006600" onPress={() => props.navigation.navigate("Home")}/>
			<ScrollView horizontal={true} style={{height: 200}}>
				<ImagExe/>
				<ImagExe/>
				<ImagExe/>
			</ScrollView>
			<Text style={{ color: "#006600", fontSize: 40 }}>Settings Screen!</Text>
			<ScrollView horizontal={true} style={{height: 200}}>
				<ImagExe/>
				<ImagExe/>
				<ImagExe/>
			</ScrollView>
		</ScrollView>
	</View>
	);
};

export default Settings;
