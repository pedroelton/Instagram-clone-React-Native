import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const PostHeader = ({ imgSource, user }) => {
	return (
		<>
			<View style={styles.postHeader}>
				<View style={styles.postAvatarName}>
					<TouchableOpacity>
						<View style={styles.storyBox}>
							<LinearGradient
								colors={["#f6ba00", "#ea0c5f"]}
								start={{ x: 0, y: 1 }}
								end={{ x: 1, y: 0 }}
								style={styles.bgGradient}
							>
								<Image source={imgSource} style={styles.story} />
							</LinearGradient>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.userName}>{user}</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity>
					<Image
						style={styles.icons}
						source={require("../../assets/Menu.png")}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default PostHeader;

const styles = StyleSheet.create({
	postHeader: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 8,
	},
	postAvatarName: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
	},
	storyBox: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	bgGradient: {
		borderRadius: 23,
		padding: 2,
		margin: 2,
	},
	story: {
		height: 40,
		width: 40,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "#000",
	},
	userName: {
		fontWeight: "700",
		fontSize: 16,
		color: "#fff",
		marginLeft: 12,
	},
	icons: {
		width: 24,
		height: 24,
	},
});
