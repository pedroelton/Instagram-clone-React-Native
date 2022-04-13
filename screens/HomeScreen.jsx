import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../components/home/Header";
import React from "react";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Header stickyHeaderIndices={[0]} />
			<Stories />
			<Post />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#000",
		flex: 1,
	},
});
