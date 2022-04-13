import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					style={styles.logo}
					source={require("../../assets/header-logo.png")}
				/>
			</TouchableOpacity>
			<View style={styles.iconsContainer}>
				<TouchableOpacity>
					<Image
						style={styles.icons}
						source={require("../../assets/add.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						style={styles.icons}
						source={require("../../assets/like.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.unreadBadge}>
						<Text style={styles.badgeText}>11</Text>
					</View>
					<Image
						style={styles.icons}
						source={require("../../assets/messenger.png")}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 20,
		marginRight: 8,
	},
	bodyText: {
		color: "#fff",
	},
	logo: {
		width: 100,
		height: 50,
		resizeMode: "contain",
	},
	iconsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	icons: {
		width: 28,
		height: 28,
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		margin: 8,
	},
	unreadBadge: {
		backgroundColor: "#ff3250",
		width: 25,
		height: 18,
		left: 20,
		position: "absolute",
		zIndex: 5,
		borderRadius: 8,
		paddingTop: 1,
	},
	badgeText: {
		color: "#fff",
		textAlign: "center",
		fontWeight: "600",
	},
});
