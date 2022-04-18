import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";

const PostInteractions = ({ like, comment, share, bookmark }) => {
	return (
		<>
			<View style={styles.postInteractions}>
				<View style={styles.leftIcons}>
					<TouchableOpacity>
						<Image style={styles.interactionIcons} source={like} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image style={styles.interactionIcons} source={comment} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image style={styles.interactionIcons} source={share} />
					</TouchableOpacity>
				</View>
				<View style={styles.rightIcons}>
					<TouchableOpacity>
						<Image style={styles.interactionIcons} source={bookmark} />
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default PostInteractions;

const styles = StyleSheet.create({
	postInteractions: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 8,
		marginBottom: 8,
		marginHorizontal: 8,
	},
	interactionIcons: {
		width: 24,
		height: 24,
		marginHorizontal: 8,
	},
	leftIcons: {
		flexDirection: "row",
	},
});
