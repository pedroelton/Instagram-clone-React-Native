import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../../data/users";
import { LinearGradient } from "expo-linear-gradient";

const Stories = () => {
	return (
		<View style={styles.storyContainer}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{USERS.map((story, index) => (
					<TouchableOpacity key={index}>
						<View style={styles.storyBox}>
							<LinearGradient
								colors={["#f6ba00", "#ea0c5f"]}
								start={{ x: 0, y: 1 }}
								end={{ x: 1, y: 0 }}
								style={styles.bgGradient}
							>
								<Image source={{ uri: story.image }} style={styles.story} />
							</LinearGradient>
							<Text style={styles.bodyText}>
								{story.user.length > 11
									? story.user.slice(0, 10).toLowerCase() + "..."
									: story.user.toLocaleLowerCase()}
							</Text>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};
export default Stories;

const styles = StyleSheet.create({
	storyContainer: {
		paddingBottom: 12,
		marginBottom: 12,
		borderWidth: 1,
		borderBottomColor: "#99999930",
		marginLeft: 12,
	},
	storyBox: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	bodyText: {
		color: "#fff",
		textAlign: "center",
		width: "100%",
	},
	story: {
		height: 72,
		width: 72,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: "#000",
	},
	bgGradient: {
		borderRadius: 40,
		padding: 3,
		marginHorizontal: 4,
		marginBottom: 8,
	},
});
