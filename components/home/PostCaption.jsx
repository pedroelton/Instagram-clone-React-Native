import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostCaption = ({ likes, caption, user }) => {
	return (
		<View>
			<View style={styles.postComments}>
				<Text style={styles.userNameComments}>{likes}</Text>
				<View style={styles.innerPostComments}>
					<Text style={styles.userNameComments}>
						{user}
						{"  "}
						<Text style={styles.bodyTextComment}>{caption}</Text>
					</Text>
				</View>
			</View>
		</View>
	);
};

export default PostCaption;

const styles = StyleSheet.create({
	postComments: {
		marginLeft: 12,
		marginRight: 4,
	},
	innerPostComments: {
		flexDirection: "row",
		marginVertical: 8,
	},
	userNameComments: {
		fontWeight: "700",
		fontSize: 16,
		color: "#fff",
	},
	bodyTextComment: {
		color: "#fff",
		fontWeight: "400",
	},
	smallBodyText: {
		color: "#ffffff99",
		fontWeight: "400",
		fontSize: 14,
		marginTop: 4,
	},
});
