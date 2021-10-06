import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingsScreen from "./Screens/SettingsScreen";

const AppNavigator = createStackNavigator(
	{
		MUZIX: HomeScreen,
		Profile: ProfileScreen,
		Settings: SettingsScreen,
	},
	{
		defaultNavigationOptions: {
			headerTitleAlign: 'center',
			headerStyle: {
				backgroundColor: "#000000",
			},
			headerTintColor: "#FFF",
		},
	}
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
	return (
		<Navigator>
		<HomeScreen />
		</Navigator>
	);
}

