import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";

const TabBar = () => {
	return (
		<View style={styles.tabbarContainer}>
			<Icon source={require("../../assets/home.png")} />
			<Icon source={require("../../assets/search.png")} />
			<Icon source={require("../../assets/reels.png")} />
			<Icon source={require("../../assets/shopping.png")} />
			<TouchableOpacity>
				<Image
					source={require("../../assets/avatar.png")}
					style={styles.avatar}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default TabBar;

const styles = StyleSheet.create({
	avatar: {
		borderRadius: 40,
		width: 24,
		height: 24,
	},
	tabbarContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 8,
	},
});
