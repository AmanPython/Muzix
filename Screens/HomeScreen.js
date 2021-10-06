import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


// Old Work

const Home = (props) => {
	const [input, setInput] = useState("");
	return (
		<View style={styles.layOut}>
			<Text style={styles.nfts}>SIGN UP</Text>
			<Text style={styles.nfts}>AND START MINTING NFTS</Text>
			<TextInput style={styles.emailId} placeholder = "ENTER EMAIL ID" placeholderTextColor = "#FFFFFF" value={input}onChangeText={(value) => setInput(value)}/>
            <Text style = {styles.text}>
    			<Button	title="SIGN UP"	style={styles.signUp} color="#000000" onPress={() => props.navigation.navigate("Profile", { username: input })}/>
            </Text>
		</View>
		);
	};

const styles = StyleSheet.create({
	container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    },
	layOut: {
		flex: 1, 
		alignItems: "center", 
		justifyContent: "center", 
		backgroundColor: '#000000',

	},
	nfts: {
		color: '#FFFFFF',
		fontSize: 20,
		marginBottom: 20,
	},
	signUp: {
		// backgroundColor: '#FFFFFF',
		// color: '#000000',
		//color: '#000000',
		//borderColor: "#FFFFFF",
		width: 250, 

	},
	emailId: { 
		color: '#FFFFFF',
		textAlign: 'center',
		justifyContent: "center",
		fontSize: 15, 
		marginTop: 80, 
		width:250, 
		margin: 15,	
		height: 40, 
		borderColor: '#FFFFFF',	
		borderWidth: 1
	},

})

export default Home;
