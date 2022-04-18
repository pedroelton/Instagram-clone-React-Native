import { StyleSheet, View, Image } from "react-native";
import React from "react";

const PostPhoto = ({ imgSource }) => {
	return (
		<>
			<View style={styles.postPhotoContainer}>
				<Image style={styles.postPhoto} source={imgSource} />
			</View>
		</>
	);
};

export default PostPhoto;

const styles = StyleSheet.create({
	postPhotoContainer: {
		width: "100%",
		height: 500,
		marginVertical: 8,
	},
	postPhoto: {
		width: "100%",
		height: 500,
	},
});
