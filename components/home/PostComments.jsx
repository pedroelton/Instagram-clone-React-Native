import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostComments = ({ comments }) => {
	return (
		<View>
			<Text style={styles.bodyTextComment}>Show all {comments} comments</Text>
			<Text style={styles.bodyText}>
				<Text style={styles.bodyTextCommentBold}>Elon Musk</Text> Cool, keep up
				the good job!
			</Text>
		</View>
	);
};

export default PostComments;

const styles = StyleSheet.create({
	bodyTextComment: {
		color: "#ffffff85",
		fontWeight: "400",
		fontSize: 16,
		marginLeft: 12,
	},
	bodyTextCommentBold: {
		color: "#ffffff",
		fontWeight: "700",
		fontSize: 16,
		marginLeft: 12,
	},
	bodyText: {
		color: "#ffffff",
		fontWeight: "400",
		fontSize: 16,
		marginLeft: 12,
	},
});
