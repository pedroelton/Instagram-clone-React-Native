import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const Icon = ({ source }) => {
	return (
		<TouchableOpacity>
			<Image style={styles.icons} source={source} />
		</TouchableOpacity>
	);
};

export default Icon;

const styles = StyleSheet.create({
	icons: {
		width: 28,
		height: 28,
	},
});
